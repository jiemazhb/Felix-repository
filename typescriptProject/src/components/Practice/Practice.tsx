import MadicalRecords from './MadicalRecords'

export default function Practice() {

  // console.log(MadicalRecords);
  
  // const userInfo = MadicalRecords.flatMap(record =>
  //   record.data.map(entry => ({
  //     id: record.id,
  //     userName: entry.userName,
  //   }))
  // );
  
  // console.log(userInfo);


  const uniqueUsers = Array.from(
    new Map(
      MadicalRecords.flatMap(record =>
        record.data.map(entry => [record.id, entry.userName])
      )
    ).entries()
  ).map(([id, userName]) => ({ id, userName }));

  console.log(uniqueUsers);

  return (
    <div>Practice</div>
  )
}
