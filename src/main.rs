extern crate iron;

use iron::prelude::*;
use iron::status;

fn main() {
    fn hello_world(request: &mut Request) -> IronResult<Response> {
        Ok(Response::with((status::Ok, format!("{:#?}", request))))
    }

    let _server = Iron::new(hello_world)
        .http("localhost:3000")
        .unwrap();

    println!("On 3000");
}
