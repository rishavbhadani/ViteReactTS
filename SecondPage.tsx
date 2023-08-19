import  { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentListComponent from './DepartmentListComponent'; 
import departmentData from './DepartmentData'; 

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage = () => {
  const [jsonData, setJsonData] = useState<PostData[]>([]);

  useEffect(() => {
    // Fetch JSON data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div style={{backgroundColor:"skyblue"}}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={jsonData} columns={columns}  checkboxSelection />
      </div>
      <div>
        {/* Include the DepartmentListComponent here */}
        <DepartmentListComponent departments={departmentData} />
      </div>
    </div>
  );
};

export default SecondPage;