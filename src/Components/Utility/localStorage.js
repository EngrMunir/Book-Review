const getStoredWishlist = ()=>{
    const storedWishList = localStorage.getItem('wish-list')
    if(storedWishList){
        return JSON.parse(storedWishList)
    }
    return [];
}
const saveWishList = id =>{
 const storedWishLists = getStoredWishlist();
 const exists = storedWishLists.find( bookId=> bookId === id)
 if(!exists){
    storedWishLists.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedWishLists))
 }
}

// Read books
const getStoredReadList = ()=>{
    const storedReadList = localStorage.getItem('read-list')
    if(storedReadList){
        return JSON.parse(storedReadList)
    }
    return [];
}
const saveReadList = id =>{
 const storedReadLists = getStoredReadList();
 const exists = storedReadLists.find( bookId=> bookId === id)
 if(!exists){
    storedReadLists.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedReadLists))
 }
}

export { saveWishList, getStoredWishlist, saveReadList, getStoredReadList }