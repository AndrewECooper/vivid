Vue.component("user-summary", {
    props: [],

    template: `
    <div class="card border-primary mb-3">
        <div class="card-header text-white bg-primary">
            <a href="/users" class="text-white">Users</a>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                <span v-if="birthdayAlerts.length === 0">No </span>
                Upcoming Birthdays
            </h4>
            <ul>
                <li v-for="user in birthdayAlerts">{{ user.birthday }} - {{ user.firstName }} {{ user.lastName }}</li>
            </ul>
        </div>
    </div>
    `,

    data: function() {
        return {
            birthdayAlerts: []
        };
    },

    mounted: function() {
        this.getBirthdayAlerts();
    },

    methods: {
        getBirthdayAlerts: function() {
            fetch("/api/users")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.birthdayAlerts = data.filter(this.filterForAlerts);
                    console.log(this.birthdayAlerts);
                });
        },

        filterForAlerts: function (user) {
            let today = new Date();
            let birthday = new Date(user.birthday);
            let thisBirthday = new Date((birthday.getMonth() + 1) + "/" + birthday.getDate() + "/" + today.getFullYear());
            let diff = (thisBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24);

            if (diff <= 7) return true;
            return false; 
        }
    }
})