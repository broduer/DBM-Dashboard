module.exports = {
    // Used to set the name of the mod. Note this is what will be shown on the dashboard.
    name: "Set Bot Game",

    // true if this is a mod for the dashboard and false if its a mod for the admin panel.
    dashboardMod: false,

    // You can put your name here and this will show up on the dashboard.
    author: "Great Plains Modding",

    // Here you define the version of the mod.
    version: "1.0.0",

    // You can set the mods description here and this will show up on the dashboard.
    short_description: "Changes the bots current status.",

    // If you want to add custom html to the mod set this to true. If not set this to false.
    customHtml: true,

    // Change the width of the popup. 
    size: function () {
        return {
            width: 700
        };
    },

    // Here you can add your custom html! Note if customHtml is set to false this will now show up. This is also valid bootstrap. Also note that this html code will be placed inside of <form> so if you want to retrieve the data all you need to do is add the fields.
    html: function () {
        return `
        <div class="form-group">
            <p>Status Type:</p>
            <select class="form-control" name="type">
                <option  selected required>PLAYING</option>
                <option>WATCHING</option>
                <option>STREAMING</option>
            </select><br><br>
            <p>Bot Game:</p>
            <input class="form-control" name="game" rows="4" required>
        </div>
        `
    },

    // This is used to move on to the next action. When the code is ran it will return to the dashboard but if you want to redirect you need to set this to false.
    next: true,

    // Whenever the command is executed this is the code that will be ran. You can use req to get stuff, note this only works if you add custom html. 
    run: async (client, req, log) => {
        client.user.setPresence({
            status: 'online',
            game: {
                name: req.body.game,
                type: req.body.type
            }
        });
    }
}