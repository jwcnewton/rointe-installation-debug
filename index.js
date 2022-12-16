
const api = require('rointe-sdk');

(async () => {
    try {
        const rointe_api = new api("EXAMPLE@gmail.com", "PASSWORD");
        await rointe_api.initialize_authentication();
        const localId = await rointe_api.get_local_id();
        const get_installs = await rointe_api.get_installations(localId.data)

        const install_data = get_installs.data;
        const install_keys = Object.keys(install_data);

        for (let i = 0; i < install_keys.length; i++) {
            const install_key = install_keys[i];
            const install = install_data[install_key]
            console.log(install)
        }
    } catch (err) {
        console.log(err)
    }
})();