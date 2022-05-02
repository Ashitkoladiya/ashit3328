

function App(){

const data =
 [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  let filterdata = data.filter((d , i) => d.expiry >= 2022)
   console.log(filterdata);
  

//  data.map((value , index)=>console.log(value.id , value.name)); 

  return (
    <>
    <table border="1px solid black">
      <th>
        <td>id</td>
        <td>name</td>
      </th>
     <tr>
       
       {
          data.map((value , index)=>{
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
              </tr>
            )
          })
       }

       {
          filterdata.map((value , index)=>{
            return (
              <tr>
                <td>{value.expiry}</td>
              </tr>
            )
          })

       }

       
     </tr>
     
    </table>
    </>
  );
}

export default App; 
