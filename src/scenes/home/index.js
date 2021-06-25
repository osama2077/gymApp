import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../../components/layout/index";
import { BleManager } from "react-native-ble-plx";
import { SelectDefault } from "../../components/common/inputs/Select";
import BleManagerInstance from "../../utils/blueToothManager/BleManager";

export default class ConnectBluetoothScreen extends Component {
    manager = null;
    bleManagerInstance = null;

    state = {
        devices: []
    }

    constructor(props) {
        super(props);
        this.bleManagerInstance = BleManagerInstance.getInstance();
        this.manager = this.bleManagerInstance.getManager();
    }

    switchToHome() {
        this.props.navigation.navigate('Paranyama')
    }

    onDeviceSelect(device) {
        
        this.bleManagerInstance.setDevice(device.device);
        this.bleManagerInstance.getDevice().connect()
        .then((device) => {
            
        })
        .catch((error) => {
            console.log(error)
        });
        this.switchToHome();
        // this.bleManagerInstance.getDevice().connect()
        // .then((device) => {
        //     return device.discoverAllServicesAndCharacteristics()
        // })
        // .then((device) => {
        //     device.writeCharacteristicWithResponseForService('4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8', 'QUJDMTIzMTIz');
        // })
        // .catch((error) => {
        //     // Handle errors
        // });
    }

    renderBluetoothDevices(error, device) {
        const { devices } = this.state;
        if (error) {
            console.log(error);
            return
        }
        const title = device.name;
        const Id = device.id;
        if (devices.find(x => x.title === title) === undefined)
            this.setState({
                devices: [...devices, {
                    Id,
                    title,
                    device
                }]
            });
    }
    
    scanDevices() {
        this.manager.startDeviceScan(null, { allowDuplicates: false }, (error, device) => this.renderBluetoothDevices(error, device));
    }

    stopScanDevies() {
        this.manager.stopDeviceScan();
    }

    componentDidMount() { 
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanDevices();
                setTimeout(this.stopScanDevies.bind(this), 3000);
                subscription.remove();
            }
        }, true);
    }

    render() {
        const { devices } = this.state;
        return(
            <Container>
                    <StatusBar
                      hidden={true}
                    />
                    <SelectDefault 
                        data={devices}
                        isModal={true}
                        isMultiSelect={false}
                        onItemSelect={this.onDeviceSelect.bind(this)}
                    />
            </Container>
        );
    }
}