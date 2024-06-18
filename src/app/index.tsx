import { Input } from "@/components/Input"
import { useState } from "react"
import { Button, View } from "react-native"

export default function Index() {
    const [] = useState("")
    const [] = useState("")
    const [] = useState("")

    return <View  style={{flex: 1, justifyContent:"center", padding: 32, gap: 16}}>
        <Input placeholder="Name"></Input>
        <Input placeholder="Amount"></Input>
        <Button title="Save"/>
    </View>

}
