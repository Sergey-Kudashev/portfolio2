import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Phones'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'HP'},
            {id: 5, name: 'laptops'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 1, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 10000, rating: 0, img: `5438c2a5-c999-40c1-ab7c-083bbb636794.jpg`},
            {id: 2, name: 'y73', price: 20000, rating: 0, img: `cde27b7a-8d03-421c-a9de-2836d0d2054a.jpg`},
            {id: 3, name: 'not plus', price: 15000, rating: 0, img: `ff6ed5b8-2cd5-46a1-9679-5c45f2f9d185.jpg`}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}