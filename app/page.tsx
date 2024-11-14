
import csv from "csv-parser";
import fs from 'fs';

interface RecordEntryType {
  id: number;
  date: Date;
  count: number
}

function csvData() : RecordEntryType[] {

  
const csvData: RecordEntryType[] = [
{id: 0 ,date: new Date(2024, 0, 31, 0, 0, 0, 0), count: 3},
{id: 1 ,date: new Date(2024, 1, 31, 0, 0, 0, 0), count: 12},
{id: 2 ,date: new Date(2024, 2, 31, 0, 0, 0, 0), count: 32},
{id: 3 ,date: new Date(2024, 3, 31, 0, 0, 0, 0), count: 69},
{id: 4 ,date: new Date(2024, 4, 31, 0, 0, 0, 0), count: 469},
{id: 5 ,date: new Date(2024, 5, 31, 0, 0, 0, 0), count: 569},
];


fs.createReadStream('public/data.csv')
  .pipe(csv())
  .on('data', (data) => {
    // console.log(data.count)
    const modifiedData = {
      id: Number(data.id),
      date: new Date(data.date),
      count: Number(data.count),
    }
    csvData.push(modifiedData)
    // console.log(csvData)
    
  })
  .on('end', () => {
    console.log(csvData)
  });
  return csvData
  
  
  
}


export default function Home() {
  const csvData: RecordEntryType[] = [];
  fs.createReadStream('public/data.csv')
  .pipe(csv())
  .on('data', (data) => {
    // console.log(data.count)
    const modifiedData = {
      id: Number(data.id),
      date: new Date(data.date),
      count: Number(data.count),
    }
    csvData.push(modifiedData)
    // console.log(csvData)
    
  })
  .on('end', () => {
    
    return (
      <>
  <div className="flex flex-col items-center min-h-screen justify-center">

    <h1>Covid 19 7days forecast</h1>
    <div className="mt-10">

    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Count</th>
      </tr>
      </thead>
      <tbody>
        {
          csvData.map(({id, date, count}) => <Row key={id} date={date} count={count} /> )
        }
      </tbody>
    </table>
    </div>
  </div>
  </>
);
});
console.log(csvData)
}

function Row({ date, count} : { date: Date, count: number}) {
  // console.log(date, count)
  return (
    <tr>
        <td>{date.toDateString()}</td>
        <td className="text-center">{count}</td>
    </tr>
  );
}