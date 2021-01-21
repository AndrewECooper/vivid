Vue.component("edit-modal", {
    props: ["show"],

    template: `
    <div>
        <div v-bind:class="modalBackdropClassObject" id="modal-backdrop">
        </div>

        <div v-bind:class="editModalClassObject" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                <button type="button" class="close" v-on:click="closeModal">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                ...
                </div>
            </div>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {
            showEditModal: false
        };
    },

    computed: {
        editModalClassObject: function() {
            return {
                "modal": true,
                "fade": true,
                "show": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            };
        },

        modalBackdropClassObject: function() {
            return {
                "modal-backdrop": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            }
        }
    },

    methods: {
        closeModal: function() {
            this.$emit("close");
        }
    }
})