import {configurePersistable} from "mobx-persist-store";

if (typeof window !== "undefined") {
    configurePersistable(
        {
            storage: window.localStorage,
            expireIn: 7 * (24 * 3600000), // 7 times 24 times 1 hour in milliseconds
            removeOnExpiration: true,
            debugMode: false, // Announce sets and gets in console
        },
        { delay: 200, fireImmediately: false }
    );
}
