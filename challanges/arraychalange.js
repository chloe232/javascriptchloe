/*let favouriteWebsite =[ 
    "Number One- Cats.org",
    "Number Two- Facebook",
    "Number Three- Instagram"
]

favouriteWebsite.push("Number Four- Twitter", "Number Five- Codenation")

favouriteWebsite.pop()


console.log(favouriteWebsite);

The above shows a list of 5 items, items 4 and 5 are added with a .push and then .pop 
is used to remove the last item on the list. */

/*let favouriteWebsite =[ 
    "Number One- Cats.org",
    "Number Two- Facebook",
    "Number Three- Instagram"
]

favouriteWebsite.push("Number Four- Twitter", "Number Five- Codenation")

favouriteWebsite.shift()
gets rid of the fitst item


console.log(favouriteWebsite);*/

/*let favouriteWebsite =[ 
    "Number One- Cats.org",
    "Number Two- Facebook",
    "Number Three- Instagram"
]

favouriteWebsite.push("Number Four- Twitter", "Number Five- Codenation")

favouriteWebsite.unshift("Number Zero- WOW.com")
unshift adds the item to the top of the list. 


console.log(favouriteWebsite);*/

/*let favouriteWebsite =[ 
    "Number One- Cats.org",
    "Number Two- Facebook",
    "Number Three- Instagram"
]

favouriteWebsite.push("Number Four- Twitter", "Number Five- Codenation")


console.log(favouriteWebsite.slice(1,3));
This will show you a range of items in a list that you chose. */

let favouriteWebsite =[ 
    "Number One- Cats.org",
    "Number Two- Facebook",
    "Number Three- Instagram"
]

favouriteWebsite.push("Number Four- Twitter", "Number Five- Codenation")

favouriteWebsite.splice(2,0, "lemon", "kiwi");


console.log(favouriteWebsite);
adds/removes items to and from a list. 