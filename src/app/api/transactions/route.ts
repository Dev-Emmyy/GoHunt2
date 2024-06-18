import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../db';
import { Status } from '../../../type';
import { tryCatch } from '../../../helpers';

export async function GET() {
  return tryCatch(async () => {
    const querySnapshot = await getDocs(collection(db, 'transactions'));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return Response.json(data)
  })
}

export async function POST(request: Request) {
  return tryCatch(async () => {
    const res = await request.json();
  
    const transaction = await addDoc(collection(db, 'transactions'), {
      date: new Date().toISOString(),
      asset: res.asset,
      transactionType: res.transactionType,
      rate: res.rate,
      status: Status.PENDING,
      phoneNumber: res.phoneNumber,
      amount: res.amount,
      bankAccount: res.bankAccount || '',
      walletAddress: res.walletAddress || '',
      bankName: res.bankName || '',
      holdersName: res.holdersName || '',
      screenshotUrl: res.screenshotUrl || '',
    });
  
  
    return Response.json({ data: transaction.id, message: 'Transaction Recorded!' });
  })
}