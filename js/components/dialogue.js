Vue.component("dialogue", {
    props: ["show", "title", "msg"],

    template: `
    <div>
        <div v-bind:class="dialogueBackdropClassObject">
        </div>

        <div v-bind:class="dialogueClassObject" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div v-bind:class="dialogueHeaderClassObject">
                        <h4 class="modal-title" id="myLargeModalLabel">{{title}}</h4>
                        <button type="button" class="close" v-on:click="closeDialogue">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{msg}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return { };
    },

    computed: {
        dialogueClassObject: function() {
            return {
                "modal": true,
                "fade": true,
                "show": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            };
        },

        dialogueBackdropClassObject: function() {
            return {
                "modal-backdrop": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            }
        },

        dialogueHeaderClassObject: function() {
            return {
                "modal-header": true,
                "bg-primary": this.dialogueType == "standard",
                "bg-warning": this.dialogueType == "warn",
                "bg-danger": this.dialogueType == "error",
                "text-white": true
            }
        },

        dialogueType: function() {
            if (this.title == "Warning!") return "warn";
            if (this.title == "Error!") return "error";
            return "standard"
        }
    },

    methods: {
        closeDialogue: function() {
            this.$emit("close");
        }
    }
})