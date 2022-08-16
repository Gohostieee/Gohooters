#[macro_use] extern crate rocket;

use std::fmt::format;
use std::fmt;

use rocket::State;
extern crate serde;
extern crate serde_json;
#[macro_use] extern crate serde_derive;
#[derive(Serialize, Deserialize, Debug)]
struct mapcell {
    tile: u8,
    
}
#[derive(Serialize, Deserialize, Debug)]

struct mapgrid {
    map: Vec<mapcell>,
    x:u16,
    y:u16
}
impl mapgrid {
    fn parseMap(&self,x:u16,y:u16,mut range:u16,width:u32) -> std::string::String {
        let mut x1 = x; let mut x2 = x;
        let mut y1 = y; let mut y2 = y;
        let mut map:String="".to_string();
        let limit:u16 = f64::sqrt(range.into()) as u16; 
        let mut count1 = 1; let mut count2:u16;
        let mut index:u32 = (x as u32 + (width) * y as u32);
        map.push_str(&format!("{{tile:{},x:{},y:{}}}",&self.map[index as usize].tile.to_string(),x,y));

        while count1 < limit {
            count2 = 1;
            while count2 < limit {
                index = (x+count1) as u32 + width * (y+count2) as u32;
                map.push_str(&format!("{{tile:{},x:{},y:{}}}",&self.map[index as usize].tile.to_string(),x+count1,y+count2));
                index = (x-count1) as u32 + width * (y-count2) as u32;
                map.push_str(&format!("{{tile:{},x:{},y:{}}}",&self.map[index as usize].tile.to_string(),x-count1,y-count2));
                count2+=1;
            }
            count1+=1;
        }
        map
    }
}
//formula to turn list index into list index x,y cordinates (in a square grid)
//x = index%total_x
//y = index/total_x
//formula to turn x,y cordinates into list index
// index = x + width * y I had to look this one up 😔
fn createMap () -> Vec<mapcell> {
    let xPos:u16=320;
    let yPos:u16=320;
    let mut mapGrid: Vec<mapcell> = Vec::new();
    let mut x:u16 = 0;let mut y:u16 = 0;let mut count = 0;

   
    while x < xPos {
        y = 0;

        while y < yPos {
            mapGrid.push(mapcell{tile:0});
            y+=1;

        }
        x+=1;

        count+=1;

    }
    mapGrid
    
}


#[get("/mapData/<x>")]
fn index(x:u16,state: &State<mapgrid>) -> std::string::String {
    state.parseMap(x,5,32,320)
}



#[launch]
fn rocket() -> _ {
    let yumaMap:mapgrid = mapgrid{map:createMap() ,x:320,y:320};

    let serial = serde_json::to_string(&yumaMap).unwrap();
    /*{
        let mut x = 0;let mut y = 0;;let mut count = 0;
        while count < 3200*3200 {
            print!("{:?} {:?}",mapGrid[count].tile, mapGrid[count].x);

            y = if y == 32 {0} else {y+1};
            x = if y == 32 {x+1} else {x};

            count+=1;
        }
    }*/

    rocket::build().mount("/", routes![index]).manage(yumaMap)

}

