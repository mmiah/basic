const BOOKS = [
    {
      title: 'React 16 Essentials',
      author: 'Artemij Fedosejev',
      imgURL:
        'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/9781787126046%20(2).jpg'
    },
    {
      title: 'Getting Started with React VR',
      author: 'John Gwinner',
      imgURL:
        'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/cover%20-%20Copy_8.png'
    },
    {
      title: 'React Native Blueprints',
      author: 'Emilio Rodriguez Martinez',
      imgURL:
        'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B06647.png'
    },
    {
      title: 'React Design Patterns and Best Practices',
      author: 'Michele Bertoli',
      imgURL:
        'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/4538cov_.jpg'
    },
    {
      title: 'React Native Cookbook',
      author: 'Crysfel Villa, Stan Bershadskiy',
      imgURL:
        'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/2558_5549_React%20Native%20Cookbook.png'
    },
    {
      title: 'React Native By Example',
      author: 'Richard Kho',
      imgURL:
        'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05604.png'
    }
  ];

//WITH FILTER YOU CAN NOT WORK ON THE ARRAY, JUST RETURN A SMALLER ARRAY

  
  const filterBook = BOOKS.filter((x)=>{x.title==='React Native By Example'})



//WITH A MAP FUNCION YOU CAN WORK ON THE RETURNED ITEMS WHILE RETURNING A SMALLER ARRAY

  const mapBook = BOOKS.map((x)=>{x.title + 'is a masterpiece of'+ x.author })


//REDUCE 

  const mapReduce = BOOKS.reduce((sum,x) => {sum+x.title},"hello")

//CURRYING FUNCTIONS means chain of functions

const whatever = (title, author, imgURL) => {title+'is a awesome book of'+author+'whose pic is here'+imgURL}

console.log(whatever)

//whatever WILL TAKE A FUNCTION title THEN RETURN ANOTHER FUNCTION author  
//WHICH WILL RETURN ANOTHER FUNCTION imgURL TO COMPLETE THE PROCESS.

const whatever = title => author => imgURL => title+'is a awesome book of'+author+'whose pic is here'+imgURL

const output = whatever('golpo')('humayun ahmed')('in prothom alo')


const once = fn => {
    let done = false;
return (...args) => {
        if (!done) {
            done = true;
fn(...args);
        }
    };
};

