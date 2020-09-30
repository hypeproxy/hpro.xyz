#[macro_use]
extern crate nickel;
extern crate serde;
extern crate serde_json;
extern crate serde_derive;

use std::env;
use nickel::{Nickel, HttpRouter, MediaType};

fn main() {
    let mut server = Nickel::new();
    server.get("/", middleware!{ |req, mut res|
        res.set(MediaType::Json);
        format!("{}", req.origin.remote_addr.ip())
    });
    server.get("/headers", middleware!{ |req, mut res|
        res.set(MediaType::Json);
        format!("{:#?}", req.origin.headers)
    });
    server.get("/user-agent", middleware!{ |req, mut res|
        res.set(MediaType::Json);
        format!("{:#?}", req.origin.headers)
    });

    let port = env::var("PORT").expect("Unable to run it on Heroku.");
    server.listen(format!("127.0.0.1:{}", port)).expect("Unable to launch hpro.xyz.");
}
