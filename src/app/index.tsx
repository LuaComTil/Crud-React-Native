import { useEffect, useState } from "react"
import { Alert, Button, FlatList, View } from "react-native"

import { Input } from "@/components/Input"
import { useProductDatabase, ProductDatabase } from "../database/useProductDatabase"
import { Product } from "@/components/Product"

export default function Index() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState<ProductDatabase[]>([])
    const [search, setSearch] = useState("")

    const productDatabase = useProductDatabase()

    async function create() {
        try {
            if(isNaN(Number(quantity))) {
                return Alert.alert("Quantity", "Quantity needs to be a number")
            }
            const response = await productDatabase.create({ name, quantity: Number(quantity)})

            list()

            Alert.alert("Produto cadastrado com ID: " + response.insertedRowId)
        } catch (error) {
            console.log(error)
        }
    }

    async function list() {
        try {
            const response = await productDatabase.searchByName(search)
            setProducts(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { list() },[search])

    return (
    
    <View  style={{flex: 1, justifyContent:"center", padding: 32, gap: 16}}>
        <Input placeholder="Name" onChangeText={setName} value={name}></Input>
        <Input placeholder="Quantity" onChangeText={setQuantity} value={quantity}></Input>
        <Button title="Save" onPress={create}/>

        <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Product data={item}/>}
            contentContainerStyle={{ gap: 16}}
        />
    </View>

    )
}
