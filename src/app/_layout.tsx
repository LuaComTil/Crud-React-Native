import { initializedDatabase } from "@/database/initializeDatabase"
import { Slot} from "expo-router"
import { SQLiteProvider } from "expo-sqlite"

export default function Layout() {
    return (

        <SQLiteProvider databaseName="appDatabase.db" onInit={initializedDatabase}>
            <Slot/>
        </SQLiteProvider>

    )
}
