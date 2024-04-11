import {db} from '../firebase.config'

import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const bookCollectionRef = collection(db,"books")

class BookDataServer{
    addBooks=(newBook)=>{
        return addDoc(bookCollectionRef,newBook)
    }
    updateBooks=(id,updateBook)=>{
        const bookDoc = doc(db,"books",id)
        return updateDoc(bookDoc,updateBook)
    }
    getAllBooks=()=>{
        return getDocs(bookCollectionRef)
    }
    getBook=(id)=>{
        const bookDoc=doc(db,"books",id)
        return getDoc(bookDoc)
    }
}

export default new BookDataService();