import { useState } from "react"
import { Alert, Button, View } from "react-native"

import { Input } from "@/components/Input"
import { useProductDatabase } from "../database/useProductDatabase"

export default function Index() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState([])

    const productDatabase = useProductDatabase()

    async function create() {
        try {
            if(isNaN(Number(quantity))) {
                return Alert.alert("Quantity", "Quantity needs to be a number")
            }
            const response = await productDatabase.create({ name, quantity: Number(quantity)})
            Alert.alert("Produto cadastrado com ID: " + response.insertedRowId)
        } catch (error) {
            console.log(error)
        }
    }

    return (
    
    <View  style={{flex: 1, justifyContent:"center", padding: 32, gap: 16}}>
        <Input placeholder="Name" onChangeText={setName} value={name}></Input>
        <Input placeholder="Quantity" onChangeText={setQuantity} value={quantity}></Input>
        <Button title="Save" onPress={create}/>
    </View>

    )
}
