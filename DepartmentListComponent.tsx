import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentListComponent: React.FC<{ departments: Department[] }> = ({ departments }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleClick = (department: string) => {
    if (openIds.includes(department)) {
      setOpenIds(openIds.filter(openDept => openDept !== department));
    } else {
      setOpenIds([...openIds, department]);
    }
  };

  const renderDepartment = (department: Department) => (
    <List key={department.department} component="div" disablePadding>
      <ListItem button onClick={() => handleClick(department.department)}>
        <ListItemIcon>
          {openIds.includes(department.department) ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText primary={department.department} />
      </ListItem>
      <Collapse in={openIds.includes(department.department)} timeout="auto" unmountOnExit>
        {department.sub_departments.map(subDept => (
          <List key={subDept} component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                {/* Add appropriate icon here */}
              </ListItemIcon>
              <ListItemText primary={subDept} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </List>
  );

  return (
    <div>
      {departments.map(department => renderDepartment(department))}
    </div>
  );
};

export default DepartmentListComponent;