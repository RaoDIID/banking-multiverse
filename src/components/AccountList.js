import React from 'react'

import { Table } from 'reactstrap';
import { Toast, ToastHeader } from 'reactstrap';

const styleHead = {
    fontStyle:"italic"
}

const accounts = {
    "Data": {
        "Account": [
            {
                "AccountId": "64dab7c3-66c3-48c0-92d5-983469ca4637",
                "Currency": "GBP",
                "AccountType": "Personal",
                "AccountSubType": "Savings",
                "Description": "Personal",
                "Nickname": "Sydney Beard",
                "Account": [
                    {
                        "SchemeName": "UK.OBIE.SortCodeAccountNumber",
                        "Identification": "50000012345602",
                        "Name": "Sydney Beard"
                    }
                ]
            },
            {
                "AccountId": "f3cff5c2-c4e2-439a-86ca-85cfd5752a05",
                "Currency": "GBP",
                "AccountType": "Personal",
                "AccountSubType": "CurrentAccount",
                "Description": "Personal",
                "Nickname": "Sydney Beard",
                "Account": [
                    {
                        "SchemeName": "UK.OBIE.SortCodeAccountNumber",
                        "Identification": "50000012345601",
                        "Name": "Sydney Beard"
                    }
                ]
            },
            {
                "AccountId": "fba49ed6-a99f-4cdd-beef-91c8843e7d3b",
                "Currency": "GBP",
                "AccountType": "Personal",
                "AccountSubType": "CurrentAccount",
                "Description": "Personal",
                "Nickname": "my new account",
                "Account": [
                    {
                        "SchemeName": "UK.OBIE.SortCodeAccountNumber",
                        "Identification": "21363239509200",
                        "Name": "my new account"
                    }
                ]
            }
        ]
    },
    "Links": {
        "Self": "https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts"
    },
    "Meta": {
        "TotalPages": 1
    }
}

export default class AccountsList extends React.Component{
    constructor(){
        super()
        this.state = {
            allAccounts : [],
            acctNo:0,
            totCount:0,
            currentIndex:0,
            currentAccounts:[]
        }
    }

    // componentDidMount(){
    //     axios.get('/bankAccount')
    //     .then(response=>{
    //         const allAccounts = response.data
    //         this.setState({allAccounts},()=>{
    //             const account=this.state.allAccounts[0]
    //             const acctNo = account['Account No']
    //             this.setState({acctNo})
    //             const totCount = this.state.allAccounts.length
    //             this.setState({totCount})
    //             const currentAccounts = this.state.allAccounts.slice(this.state.currentIndex,10)
    //             this.setState({currentAccounts})
    //         })
            
    //     })
    // }
    handleNextClick = () => {

        if((this.state.currentIndex+10)<=(this.state.allAccounts.length)){
            this.setState((prevState)=>({
                currentIndex : prevState.currentIndex + 10
            }),()=>{
                const currentAccounts = this.state.allAccounts.slice(this.state.currentIndex,this.state.currentIndex+10)
                    this.setState({currentAccounts})
            })
        } 
    }
    
    handleBackClick = () => {
        // console.log("clicked back",this.state.currentIndex)
        if(this.state.currentIndex){
            this.setState((prevState)=>({
                currentIndex : prevState.currentIndex - 10
            }),()=>{
                // console.log(this.state.currentIndex)
                const currentAccounts = this.state.allAccounts.slice(this.state.currentIndex,this.state.currentIndex+10)
                    this.setState({currentAccounts})
            })
    }
}

    render(){
        return (
            <div>
                {this.state.acctNo?<h1 style={{textAlign:"center"}}> Account No : {this.state.acctNo} </h1>:<h1></h1>}
                <Toast>
                {this.state.currentAccounts.length?<ToastHeader style={styleHead}>({this.state.currentAccounts.length}) entries out of ({this.state.allAccounts.length})</ToastHeader>:<h1></h1>}
                </Toast>
                
                        <Table bordered>
                            <thead>
                                <tr>
                                <th style={{color:"darkred"}}>AccountId</th>
                                <th style={{color:"darkred", width:"50px"}}>Currency</th>
                                &nbsp;&nbsp;
                                <th style={{color:"darkred"}}>AccountType</th>
                                &nbsp;&nbsp;
                                <th style={{color:"darkred"}}>AccountSubType</th>
                                &nbsp;&nbsp;
                                <th style={{color:"darkred"}}>Description</th>
                                &nbsp;&nbsp;
                                <th style={{color:"darkred"}}>Nickname</th>
                                </tr>
                            </thead>
                            <tbody>
                            {accounts.Data.Account.map((account,index)=>{
                                 return (
                                <tr key={index}>
                                <td>{account['AccountId']}</td>
                                <td>{account['Currency']}</td>
                                &nbsp;&nbsp;
                                <td>{account['AccountType']}</td>
                                &nbsp;&nbsp;
                                <td>{account['AccountSubType']}</td>
                                &nbsp;&nbsp;
                                <td>{account['Description']}</td>
                                &nbsp;&nbsp;
                                <td>{account['Nickname']}</td>
                                &nbsp;&nbsp;
                                <td><button onClick={this.handleShowTransactions}>Show Transactions</button></td>
                                </tr>
                            )})}
                            </tbody>
                            </Table>  
            </div>
        )
    }
}