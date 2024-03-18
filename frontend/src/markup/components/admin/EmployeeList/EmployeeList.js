import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { useAuth } from '../../../../Context/AuthContext';
import employeeService from '../../../../services/employee.service';
import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [apiError, setApiError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [editedId, setEditedId] = useState('');
    const [deletedId, setDeletedId] = useState('');
    const [showAddForm, setShowAddForm] = useState(false); // State variable for toggling add form
    const Navigate = useNavigate();
    const location = useLocation();
    const { employee } = useAuth();

    let token = '';
    if (employee) {
        token = employee.employee_token;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await employeeService.getAllEmployees(token);
                if (!response.ok) {
                    setApiError(true);
                    if (response.status === 401) {
                        setErrorMessage('Please login again!');
                    } else if (response.status === 403) {
                        setErrorMessage('You are not authorized!');
                    } else {
                        setErrorMessage('Please try again later');
                    }
                    return;
                }
                const data = await response.json();
                if (data.data.length !== 0) {
                    setEmployees(data.data);
                }
            } catch (error) {
                console.error(error);
                setApiError(true);
                setErrorMessage('Please try again later');
            }
        };
        fetchData();
    }, [token]);

    const handlePencilClick = (id) => {
        setEditedId(id);
        setShowAddForm(true); // Show add form when edit button is clicked
    };

    const handleUpdate = () => {
        // Implement update logic here
    };

    const handleTrashClick = (id) => {
        setDeletedId(id);
        // Implement delete logic here
    };

    return (
        <>
            {apiError ? (
                // Error handling UI
                <section className='contact-section'>
                    <div className='auto-container'>
                        <div className='conttact-title'>
                            <h2>{errorMessage}</h2>
                        </div>
                    </div>
                </section>
            ) : (
                // Main employee list UI
                <section className='contact-section'>
                    <div className='auto-container'>
                        <div className='contact-title'>
                            <h2>Employees</h2>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Active</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Added Date</th>
                                    <th>Role</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.employee_id}>
                                        {/* Employee data cells */}
                                        <td>{employee.employee_Active ? 'Yes' : 'No'}</td>
                                        <td>{employee.employee_first_name}</td>
                                        <td>{employee.employee_last_name}</td>
                                        <td>{employee.employee_email}</td>
                                        <td>{employee.employee_phone}</td>
                                        <td>{format(new Date(employee.added_date), 'MM-dd-yyyy | kk:mm')}</td>
                                        <td>{employee.company_role_id}</td>
                                        <td>
                                            <div className='edit-delete-icons'>
                                                {/* Edit and delete buttons */}
                                                <Button
                                                    variant='secondary'
                                                    size='sm'
                                                    className='m-2'
                                                    onClick={() => handleTrashClick(employee.employee_id)}>
                                                    <BsTrashFill />
                                                </Button>
                                                <Button
                                                    size='sm'
                                                    className='m-2'
                                                    onClick={() => handlePencilClick(employee.employee_id)}>
                                                    <BsPencilFill />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </section>
            )}

            {/* Add Employee Form */}
            <Modal show={showAddForm} onHide={() => setShowAddForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmployeeForm onUpdate={() => setShowAddForm(false)} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EmployeeList;