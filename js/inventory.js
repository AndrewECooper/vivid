//var invGrid = agGrid;

var app = new Vue({
    el: "#content",
    
    data: {
        rowSelected: {},
        showEditModal: false,
        showDialogue: false,
        dialogueTitle: "",
        dialogueMessage: ""
    },

    methods: {
        onRowSelected: function(row) {
            console.log("Row Selected: ", row);
            this.rowSelected = row;
        },

        editSelected: function() {
            if (typeof this.rowSelected.id === "undefined") {
                this.openDialogue("Warning!", "You must select a row to edit.");
                return;
            };
            this.showEditModal = true;
        },

        deleteSelected: function() {
            if (typeof this.rowSelected.id === "undefined") {
                this.openDialogue("Warning!", "You must select a row to delete.");
                return;
            };
            this.openDialogue("Error!", "You cannot delete items yet.");
        },

        addNew: function() {
            console.log("Adding!");
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
        }
    }
});