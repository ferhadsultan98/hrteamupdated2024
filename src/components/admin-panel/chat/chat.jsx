import React, { useState, useEffect, useRef } from 'react';
import './chat.css'; 

const Chat = () => {
    const [people, setPeople] = useState([
        { name: 'Ahmet Yılmaz', image: 'https://via.placeholder.com/40' },
        { name: 'Ayşe Kaya', image: 'https://via.placeholder.com/40' },
        { name: 'Mehmet Demir', image: 'https://via.placeholder.com/40' },
        { name: 'Fatma Çelik', image: 'https://via.placeholder.com/40' },
        { name: 'Ali Veli', image: 'https://via.placeholder.com/40' },
    ]);
    const [filteredPeople, setFilteredPeople] = useState(people);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [message, setMessage] = useState('');
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        setFilteredPeople(people);
    }, [people]);

    const handleSearch = (event) => {
        const filter = event.target.value.toLowerCase();
        setFilteredPeople(
            people.filter(person => person.name.toLowerCase().includes(filter))
        );
    };

    const handlePersonClick = (person) => {
        setSelectedPerson(person);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            chatMessagesRef.current.innerHTML += `
                <div class="chat-message sent">
                    <div class="message-content">${message}</div>
                </div>
            `;
            setMessage('');
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight; // En son mesaja kaydır
        }
    };

    return (
        <div className="container">
        
            <div className="main-content">

            

                {/* Chat */}
                <div className="chat-container">
                    {/* Person List */}
                    <div className="person-list">
                        <h3>Kişiler</h3>
                        <input type="text" id="search" placeholder="Kişileri ara..." onChange={handleSearch} />
                        <ul id="person-list">
                            {filteredPeople.map(person => (
                                <li key={person.name} onClick={() => handlePersonClick(person)}>
                                    <img src={person.image} alt={person.name} />
                                    <span>{person.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sohbet Alanı */}
                    <div className="chat-window">
                        <div className="chat-header">
                            <h3>{selectedPerson ? selectedPerson.name : 'Seçili Kişi'}</h3>
                        </div>
                        <div className="chat-messages" ref={chatMessagesRef}>
                            {/* Chat message */}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                id="message-input"
                                placeholder="Mesaj yazın..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button id="send-button" onClick={handleSendMessage}>Gönder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
