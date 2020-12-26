#[macro_use]
extern crate nickel;
extern crate serde;
extern crate serde_json;
extern crate serde_derive;

use std::env;
use nickel::{Nickel, HttpRouter, MediaType};
use nickel::extensions::Redirect;
use nickel::hyper::header::Location;
use nickel::hyper::status::StatusCode;

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
    server.get("/about", middleware!{ |_, mut res|
        res.set(StatusCode::TemporaryRedirect)
            .set(Location("http://hypeproxy.io/".into()));
        ""
    });

    let port = env::var("PORT").expect("Unable to run it on Heroku.");
    server.listen(format!("0.0.0.0:{}", port)).expect("Unable to launch hpro.xyz.");
}
