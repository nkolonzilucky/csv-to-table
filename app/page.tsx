

interface RecordEntryType {
date: Date;
count: number
}

function csvData() : RecordEntryType[] {
const csvData: RecordEntryType[] = [
{date: new Date(2024, 0, 31, 0, 0, 0, 0), count: 3},
{date: new Date(2024, 1, 31, 0, 0, 0, 0), count: 12},
{date: new Date(2024, 2, 31, 0, 0, 0, 0), count: 32},
{date: new Date(2024, 3, 31, 0, 0, 0, 0), count: 69},
{date: new Date(2024, 4, 31, 0, 0, 0, 0), count: 469},
{date: new Date(2024, 5, 31, 0, 0, 0, 0), count: 569},
];
return csvData

}

export default function Home() {

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
        <tr>
          <td>{new Date().toDateString()}</td>
          <td className="text-center">2</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  </>
);
}
