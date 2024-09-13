import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', department: 'Java', role: 'Developer', degree: 'C.E.', phone: '1234567890', email: 'test@email.co', joiningDate: '2018-02-25' },
        { id: 2, firstName: 'Sarah', lastName: 'Smith', department: 'Designing', role: 'Leader', degree: 'Msc.IT', phone: '1234567890', email: 'test@email.co', joiningDate: '2018-02-12' },
        { id: 3, firstName: 'Rajesh', lastName: '', department: 'Marketing', role: 'Manager', degree: 'MCA', phone: '1234567890', email: 'test@email.co', joiningDate: '2018-02-25' },
        { id: 4, firstName: 'Jay', lastName: 'Soni', department: 'Java', role: 'Designer', degree: 'C.E.', phone: '1234567890', email: 'test@email.co', joiningDate: '2018-02-25' },
        { id: 5, firstName: 'Rajesh', lastName: '', department: 'Accounting', role: 'Developer', degree: 'M.E.', phone: '1234567890', email: 'test@email.co', joiningDate: '2018-02-25' }
    ]);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [addingEmployee, setAddingEmployee] = useState(false);
    const [calendar, setCalendar] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        selectedDates: {}
    });

    useEffect(() => {
        setFilteredEmployees(employees.filter(emp => `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery, employees]);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleEdit = (employee) => {
        setEditingEmployee(employee);
        document.getElementById('editModal').style.display = 'block';
    };

    const handleAdd = () => {
        setAddingEmployee(true);
        document.getElementById('addEmployeeModal').style.display = 'block';
    };

    const handleCancelEdit = () => {
        setEditingEmployee(null);
        document.getElementById('editModal').style.display = 'none';
    };

    const handleCancelAdd = () => {
        setAddingEmployee(false);
        document.getElementById('addEmployeeModal').style.display = 'none';
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = {
            ...editingEmployee,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            department: e.target.department.value,
            role: e.target.role.value,
            degree: e.target.degree.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            joiningDate: e.target.joiningDate.value
        };
        setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
        setEditingEmployee(null);
        document.getElementById('editModal').style.display = 'none';
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length ? Math.max(employees.map(emp => emp.id)) + 1 : 1,
            firstName: e.target.addFirstName.value,
            lastName: e.target.addLastName.value,
            department: e.target.addDepartment.value,
            role: e.target.addRole.value,
            degree: e.target.addDegree.value,
            phone: e.target.addPhone.value,
            email: e.target.addEmail.value,
            joiningDate: e.target.addJoiningDate.value
        };
        setEmployees([...employees, newEmployee]);
        setAddingEmployee(false);
        document.getElementById('addEmployeeModal').style.display = 'none';
    };

    const handleDelete = (id) => {
        if (window.confirm('Bu çalışanı silmek istediğinizden emin misiniz?')) {
            setEmployees(employees.filter(emp => emp.id !== id));
        }
    };

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(employees.map(e => ({
            'Ad': e.firstName,
            'Soyad': e.lastName,
            'Departman': e.department,
            'Rol': e.role,
            'Derece': e.degree,
            'Telefon': e.phone,
            'E-posta': e.email,
            'Katılma Tarihi': e.joiningDate
        })));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Çalışanlar");
        XLSX.writeFile(workbook, "employees.xlsx");
    };

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const json = XLSX.utils.sheet_to_json(sheet);
                setEmployees(json.map(item => ({
                    id: item.id || (employees.length ? Math.max(employees.map(emp => emp.id)) + 1 : 1),
                    firstName: item.Ad || '',
                    lastName: item.Soyad || '',
                    department: item.Departman || '',
                    role: item.Rol || '',
                    degree: item.Derece || '',
                    phone: item.Telefon || '',
                    email: item['E-posta'] || '',
                    joiningDate: item['Katılma Tarihi'] || ''
                })));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleCalendarChange = (type) => {
        setCalendar(prev => {
            const newMonth = type === 'prevMonth' ? (prev.month === 0 ? 11 : prev.month - 1) : (prev.month === 11 ? 0 : prev.month + 1);
            const newYear = type === 'prevMonth' && prev.month === 0 ? prev.year - 1 : type === 'nextMonth' && prev.month === 11 ? prev.year + 1 : prev.year;
            return { ...prev, year: newYear, month: newMonth };
        });
    };

    const handleDateClick = (date) => {
        setCalendar(prev => {
            const key = `${prev.year}-${prev.month}-${date}`;
            return {
                ...prev,
                selectedDates: {
                    ...prev.selectedDates,
                    [key]: prev.selectedDates[key] === 'selected' ? 'unselected' : 'selected'
                }
            };
        });
    };

    const renderCalendar = () => {
        const { year, month, selectedDates } = calendar;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const calendarDays = [];

        for (let i = firstDay - 1; i >= 0; i--) {
            calendarDays.push(<div className="employees-calendar-day prev-month" key={`prev-${i}`}>{prevMonthDays - i}</div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateClass = (year === new Date().getFullYear() && month === new Date().getMonth() && i === new Date().getDate()) ? 'today' : '';
            const selectedClass = selectedDates[`${year}-${month}-${i}`] === 'selected' ? 'selected' : '';
            calendarDays.push(
                <div
                    className={`employees-calendar-day ${dateClass} ${selectedClass}`}
                    key={i}
                    onClick={() => handleDateClick(i)}
                >
                    {i}
                </div>
            );
        }

        return (
            <div className="employees-calendar">
                <div className="employees-calendar-header">
                    <button onClick={() => handleCalendarChange('prevYear')}>{'<<'}</button>
                    <button onClick={() => handleCalendarChange('prevMonth')}>{'<'}</button>
                    <span>{`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`}</span>
                    <button onClick={() => handleCalendarChange('nextMonth')}>{'>'}</button>
                    <button onClick={() => handleCalendarChange('nextYear')}>{'>>'}</button>
                </div>
                <div className="employees-calendar-days">
                    {calendarDays}
                </div>
            </div>
        );
    };

    return (
        <div className="employees-container">
            <main className="employees-main-content">
                <header className="employees-header">
                    <h1>Çalışanlar</h1>
                    <div className="employees-header-actions">
                        <input
                            type="text"
                            placeholder="Arama..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button onClick={handleAdd}>Yeni Çalışan Ekle</button>
                        <button onClick={handleExport}>Excel'e Aktar</button>
                        <input
                            type="file"
                            accept=".xlsx, .xls"
                            onChange={handleImport}
                            className="employees-file-input"
                        />
                        <button onClick={() => window.location.reload()}>Yenile</button>
                    </div>
                </header>

                <div className="employees-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Departman</th>
                                <th>Rol</th>
                                <th>Derece</th>
                                <th>Telefon</th>
                                <th>E-posta</th>
                                <th>Katılma Tarihi</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(emp => (
                                <tr key={emp.id}>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.degree}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.joiningDate}</td>
                                    <td>
                                        <button onClick={() => handleEdit(emp)} className='edit-btn'>Düzenle</button>
                                        <button onClick={() => handleDelete(emp.id)} className='delete-btn' >Sil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {renderCalendar()}
                <div id="editModal" className="employees-modal">
                    <div className="employees-modal-content">
                        <span className="employees-close" onClick={handleCancelEdit}>&times;</span>
                        <h2>Çalışanı Düzenle</h2>
                        <form onSubmit={handleEditSubmit}>
                            <label>Ad:
                                <input type="text" name="firstName" defaultValue={editingEmployee?.firstName || ''} required />
                            </label>
                            <label>Soyad:
                                <input type="text" name="lastName" defaultValue={editingEmployee?.lastName || ''} required />
                            </label>
                            <label>Departman:
                                <input type="text" name="department" defaultValue={editingEmployee?.department || ''} required />
                            </label>
                            <label>Rol:
                                <input type="text" name="role" defaultValue={editingEmployee?.role || ''} required />
                            </label>
                            <label>Derece:
                                <input type="text" name="degree" defaultValue={editingEmployee?.degree || ''} required />
                            </label>
                            <label>Telefon:
                                <input type="text" name="phone" defaultValue={editingEmployee?.phone || ''} required />
                            </label>
                            <label>E-posta:
                                <input type="email" name="email" defaultValue={editingEmployee?.email || ''} required />
                            </label>
                            <label>Katılma Tarihi:
                                <input type="date" name="joiningDate" defaultValue={editingEmployee?.joiningDate || ''} required />
                            </label>
                            <button type="submit">Güncelle</button>
                            <button type="button" onClick={handleCancelEdit}>İptal</button>
                        </form>
                    </div>
                </div>
                <div id="addEmployeeModal" className="employees-modal">
                    <div className="employees-modal-content">
                        <span className="employees-close" onClick={handleCancelAdd}>&times;</span>
                        <h2>Yeni Çalışan Ekle</h2>
                        <form onSubmit={handleAddSubmit}>
                            <label>Ad:
                                <input type="text" name="addFirstName" required />
                            </label>
                            <label>Soyad:
                                <input type="text" name="addLastName" required />
                            </label>
                            <label>Departman:
                                <input type="text" name="addDepartment" required />
                            </label>
                            <label>Rol:
                                <input type="text" name="addRole" required />
                            </label>
                            <label>Derece:
                                <input type="text" name="addDegree" required />
                            </label>
                            <label>Telefon:
                                <input type="text" name="addPhone" required />
                            </label>
                            <label>E-posta:
                                <input type="email" name="addEmail" required />
                            </label>
                            <label>Katılma Tarihi:
                                <input type="date" name="addJoiningDate" required />
                            </label>
                            <button type="submit">Ekle</button>
                            <button type="button" onClick={handleCancelAdd}>İptal</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Employees;
