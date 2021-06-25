import { BleManager } from "react-native-ble-plx";

export default class BleManagerInstance {

    static bleInstance = null;
    manager = new BleManager();
    device = null;

    static getInstance() {
        if (BleManagerInstance.bleInstance == null) {
            BleManagerInstance.bleInstance = new BleManagerInstance();
        }

        return this.bleInstance;
    }

    setDevice(device) {
        this.device = device;
    }

    getDevice() {
        return this.device;
    }

    getManager() {
        return this.manager;
    }


}