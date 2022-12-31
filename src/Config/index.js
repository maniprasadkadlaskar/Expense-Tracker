import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { auth } from '../firebase-config'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { db } from '../firebase-config'

const provider = new GoogleAuthProvider()

// To fetch collection data
export const fetchData = async (setExpenseDataList) => {
    const expenseCollection = collection(db , localStorage.getItem('uid'))
    const data = await getDocs(expenseCollection)
    
    setExpenseDataList(data.docs.map((doc) => ({
        ...doc.data(),
        id : doc.id
    })))
}

// To fetch single document
export const fetchDataById = async (id , setFormData) => {
    const expenseCollection = collection(db , localStorage.getItem('uid'))
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
    const expenseCollection = collection(db , localStorage.getItem('uid'))
    await addDoc(expenseCollection , payLoad)
}

// To update document
export const updateData = async (payLoad) => {
    const document = doc(db , localStorage.getItem('uid') , payLoad.id)
    await updateDoc(document , payLoad)
}

// To delete document
export const deleteData = async (id) => {
    const document = doc(db , localStorage.getItem('uid') , id)
    await deleteDoc(document)
}

// To set user Id and Email 
const setUser = (uid , email) => {
    localStorage.setItem('uid' , uid)
    localStorage.setItem('email' , email)
}

// To remove user 
const removeUser = () => {
    localStorage.removeItem('uid')
    localStorage.removeItem('email')
}

// Initial authentication 
export const initialAuth = () => {
    onAuthStateChanged(auth , (currentUser) => {
        if(currentUser != null) {
            setUser(currentUser.uid , currentUser.email)
            return true
        }
        return false 
    })
}

// To register user 
export const register = async (email , password) => {
    try {
        const res = await createUserWithEmailAndPassword( auth , email , password)
        setUser(res.user.uid , res.user.email)
        return { status : 'ok' }
    }
    catch (err) {
        throw new Error(err.message)
    }
}

// To login user 
export const login = async (email , password) => {
    try {
        const res = await signInWithEmailAndPassword( auth , email , password)
        setUser(res.user.uid , res.user.email)
        return { status : 'ok' }
    }
    catch (err) {
        throw new Error(err.message)
    }
}

// To logout user 
export const logout = async () => {
    await signOut(auth)
    removeUser()
}

// To login with google 
export const loginWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth , provider)
        setUser(res.user.uid , res.user.email)        
    }
    catch (err) {
        console.log(err.message)
        throw new Error(err.message)
    }
}