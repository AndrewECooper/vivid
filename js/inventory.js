//var invGrid = agGrid;

var app = new Vue({
    el: "#content",
    
    data: {
        blankRow: {
            "id": 0,
            "description": "",
            "units": 0,
            "quantityPerUnit": 0,
            "location": "",
            "shelf": "",
            "bin": "",
            "link": "",
            "cost": 0.0,
            "alert": 0
        },
        rowSelected: {},
        showEditModal: false,
        showDialogue: false,
        dialogueTitle: "",
        dialogueMessage: "",
        reload: 1,
        editMode: "add"
    },

    methods: {
        post: function(url, data) {
            fetch(url, { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.reload++;
            });
        },

        onRowSelected: function(row) {
            console.log("Row Selected: ", row);
            this.rowSelected = row;
        },

        editSelected: function() {
            if (typeof this.rowSelected.id === "undefined") {
                this.openDialogue("Warning!", "You must select a row to edit.");
                return;
            };
            console.log("Edit! ", this.rowSelected);
            this.editMode = 'edit';
            this.showEditModal = true;
        },

        deleteSelected: function() {
            if (typeof this.rowSelected.id === "undefined") {
                this.openDialogue("Warning!", "You must select a row to delete.");
                return;
            };
            this.post("/api/inventory/delete", this.rowSelected);
        },

        addNew: function() {
            console.log("Adding!");
            this.editMode = 'add';
            this.showEditModal = true;
        },

        closeEditModal: function() {
            this.showEditModal = false;
        },

        openDialogue: function(title, message) {
            this.dialogueTitle = title;
            this.dialogueMessage = message;
            this.showDialogue = true;
        },

        closeDialogue: function() {
            this.showDialogue = false;
        },

        saveItem: function(item) {
            console.log("Firing reload!", item);
            if (this.editMode === "add") {
                this.post("/api/inventory/add", item);
            } else {
                this.post("/api/inventory/edit", item);
            }
            this.closeEditModal();
        }
    }
});