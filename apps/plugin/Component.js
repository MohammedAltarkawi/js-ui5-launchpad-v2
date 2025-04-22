sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("com.altarkawi.plugin.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            debugger
            (async () => {
                try {
                    const oUserInfo = await sap.ushell.Container.getServiceAsync("UserInfo");
                    const Extension = await sap.ushell.Container.getServiceAsync("Extension");
                    const fullName = oUserInfo.getFullName();
                    console.log("Logged in user:", fullName);

                    // Optional: Show a toast
                    sap.m.MessageToast.show(`Hello ${fullName}!`);

                    // You can now use other async services too
                } catch (error) {
                    console.error("Error initializing plugin:", error);
                }
            })();
        }
    });
});
