import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { auth } from '../firebase-config'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { db } from '../firebase-config'

const googleProvider = new GoogleAuthProvider()

// To fetch collection data
export const fetchData = async (setExpenseDataList) => {
    const expenseCollection = collection(db , auth.currentUser.uid)
    const q = query(expenseCollection , orderBy('date' , 'desc'))
    const data = await getDocs(q)

    console.log(data.docs[0].data());
    
    setExpenseDataList(data.docs.map((doc) => ({
        ...doc.data(),
        id : doc.id
    })))
}

// To fetch single document
export const fetchDataById = async (id , setFormData) => {
    const expenseCollection = collection(db , auth.currentUser.uid)
    const data = await getDocs(expenseCollection)
    
    data.docs.forEach((doc) => {
        if(doc.id === id) {
            setFormData({
                ...doc.data(),
                id : doc.id
            })
        }
    })
}

// To post document
export const postData = async (payLoad) => {
    const expenseCollection = collection(db , auth.currentUser.uid)
    await addDoc(expenseCollection , payLoad)
}

// To update document
export const updateData = async (payLoad) => {
    const document = doc(db , auth.currentUser.uid , payLoad.id)
    await updateDoc(document , payLoad)
}

// To delete document
export const deleteData = async (id) => {
    const document = doc(db , auth.currentUser.uid , id)
    await deleteDoc(document)
}

// To register user 
export const register = async (email , password) => {
    try {
        await createUserWithEmailAndPassword( auth , email , password)
        return { status : 'ok' }
    }
    catch (err) {
        throw new Error(err.message)
    }
}

// To login user 
export const login = async (email , password) => {
    try {
        await signInWithEmailAndPassword( auth , email , password)
        return { status : 'ok' }
    }
    catch (err) {
        throw new Error(err.message)
    }
}

// To logout user 
export const logout = async () => {
    await signOut(auth)
}

// To login with google 
export const loginWithGoogle = async () => {
    try {
        await signInWithPopup(auth , googleProvider)
    }
    catch (err) {
        console.log(err.message)
        throw new Error(err.message)
    }
}