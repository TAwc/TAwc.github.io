#[macro_use] extern crate rocket;
use rocket::response::status;
use rocket::serde::json::Json;
use serde_derive::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
struct ListItem {
    id: u32,
    name: String,
    link: String,
    rating: u8,
    taken: bool,
}

#[derive(Deserialize, Serialize, Debug)]
struct WantList {
    items : Vec<ListItem>,
}



#[get("/List")]
fn get_list() -> Json<String> {
    
    let list = {
        let file = std::fs::read_to_string("./database.json"); 
        serde_json::from_str::<WantList>(&file.unwrap()).unwrap()
    };
    Json(serde_json::to_string(&list).unwrap())
}



#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![get_list])
}