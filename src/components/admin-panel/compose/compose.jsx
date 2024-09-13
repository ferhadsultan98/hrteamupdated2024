import React, { useState } from "react";
import { FaCamera, FaSearch, FaPaperPlane, FaPaperclip, FaSmile, FaEllipsisV, FaMicrophone, FaCheckDouble, FaTrash, FaBan } from "react-icons/fa";
import './compose.css';

const Compose = () => {
    const [currentTab, setCurrentTab] = useState('all'); // Tabs: All, Unread, Groups
    const [inputValue, setInputValue] = useState('');    // Chat input
    const [activeChat, setActiveChat] = useState(null);  // Active chat
    const [searchValue, setSearchValue] = useState('');  // Search
    const [searchVisible, setSearchVisible] = useState(false); // Search viewing
  
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Azerconnect Melisa Xanm',
            messages: [
                { type: 'received', text: 'Olmasa bes sadece yerine yetirecegimiz...', time: '15:08' },
                { type: 'sent', text: 'Tamam o zaman toplu suallari yigim size muraciet edecem oradan', time: '15:14' },
                { type: 'received', text: 'Super', time: '15:15' },
                { type: 'sent', text: 'Ek olarak, detayları da ekleyeceğim.', time: '15:16' },
                { type: 'received', text: 'Tamam, bekliyorum.', time: '15:17' }
            ],
            group: false,
            lastSeen: '11:47',
            status: 'Görüldü'
        },
        {
            id: 2,
            name: 'Eli',
            messages: [
                { type: 'sent', text: 'Aca bilsen?', time: '11:48' },
                { type: 'received', text: 'Bunu kontrol ediyorum.', time: '11:50' },
                { type: 'sent', text: 'Ne zaman dönebilirsin?', time: '11:51' },
                { type: 'received', text: 'Yarın öğlene kadar. Size haber vereceğim.', time: '11:52' },
                { type: 'sent', text: 'Harika, teşekkürler.', time: '11:53' }
            ],
            group: false,
            lastSeen: '11:48',
            status: 'Görüldü'
        },
    
        {
            id: 3,
            name: 'Yunik Dövlət satınalmaları',
            messages: [
                { type: 'received', text: 'Siz: Bu tendera bas qosuldunuzmu?', time: '11:43' },
                { type: 'sent', text: 'Hala bas qoşulmadık, sizi bilgilendireceğiz.', time: '11:45' },
                { type: 'received', text: 'Tamam, bu konuda sizi bilgilendiririz.', time: '11:46' },
                { type: 'sent', text: 'Teşekkürler, beklemede olacağım.', time: '11:47' },
                { type: 'received', text: 'Rica ederiz, size dönüş yapacağız.', time: '11:48' }
            ],
            group: true,
            lastSeen: '11:43',
            status: 'Son görülme'
        },
        {
            id: 4,
            name: 'Yeni Sohbet 1',
            messages: [
                { type: 'received', text: 'Merhaba, nasılsın?', time: '12:00' },
                { type: 'sent', text: 'İyi, teşekkür ederim. Siz nasılsınız?', time: '12:01' },
                { type: 'received', text: 'Ben de iyiyim. Sizi görmek güzel.', time: '12:02' },
                { type: 'sent', text: 'Ben de aynı şekilde.', time: '12:03' },
                { type: 'received', text: 'Harika! Görüşürüz.', time: '12:04' }
            ],
            group: false,
            lastSeen: '12:04',
            status: 'Görüldü'
        },
        {
            id: 5,
            name: 'Yeni Sohbet 2',
            messages: [
                { type: 'sent', text: 'Toplantı saat kaçta?', time: '13:00' },
                { type: 'received', text: 'Saat 14:00\'te olacak.', time: '13:01' },
                { type: 'sent', text: 'Tamam, teşekkürler.', time: '13:02' },
                { type: 'received', text: 'Rica ederim, iyi çalışmalar.', time: '13:03' },
                { type: 'sent', text: 'Size de iyi çalışmalar.', time: '13:04' }
            ],
            group: false,
            lastSeen: '13:04',
            status: 'Görüldü'
        },
        {
            id: 6,
            name: 'Yeni Grup 1',
            messages: [
                { type: 'received', text: 'Herkese merhaba!', time: '14:00' },
                { type: 'sent', text: 'Merhaba, nasılsınız?', time: '14:01' },
                { type: 'received', text: 'İyi, teşekkürler. Sen nasılsın?', time: '14:02' },
                { type: 'sent', text: 'Ben de iyiyim.', time: '14:03' },
                { type: 'received', text: 'Harika! Bugün için planlarınız var mı?', time: '14:04' }
            ],
            group: true,
            lastSeen: '14:04',
            status: 'Son görülme'
        },
        {
            id: 7,
            name: 'Yeni Grup 2',
            messages: [
                { type: 'received', text: 'Bugünkü görevleri tamamladınız mı?', time: '15:00' },
                { type: 'sent', text: 'Evet, hepsini bitirdim.', time: '15:01' },
                { type: 'received', text: 'Harika, tebrikler!', time: '15:02' },
                { type: 'sent', text: 'Teşekkürler.', time: '15:03' },
                { type: 'received', text: 'Şimdi bir şeyler planlayalım mı?', time: '15:04' }
            ],
            group: true,
            lastSeen: '15:04',
            status: 'Son görülme'
        },
        {
            id: 8,
            name: 'Yeni Sohbet 3',
            messages: [
                { type: 'sent', text: 'Yeni proje hakkında bilgi aldınız mı?', time: '16:00' },
                { type: 'received', text: 'Evet, proje hakkında bilgi sahibiyim.', time: '16:01' },
                { type: 'sent', text: 'Detayları bana iletebilir misiniz?', time: '16:02' },
                { type: 'received', text: 'Tabii, size detayları göndereceğim.', time: '16:03' },
                { type: 'sent', text: 'Teşekkürler, bekliyorum.', time: '16:04' }
            ],
            group: false,
            lastSeen: '16:04',
            status: 'Görüldü'
        }
    ]);

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const displayedChats = chats.filter(chat => {
        const nameMatches = chat.name.toLowerCase().includes(searchValue);
        if (currentTab === 'all') return nameMatches;
        if (currentTab === 'unread') return nameMatches && chat.messages.some(msg => msg.type === 'received');
        if (currentTab === 'groups') return nameMatches && chat.group;
        return false;
    });

    const handleSendMessage = () => {
        if (inputValue.trim() && activeChat !== null) {
            const updatedChats = chats.map(chat => {
                if (chat.id === activeChat) {
                    return { ...chat, messages: [...chat.messages, { type: 'sent', text: inputValue, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }] };
                }
                return chat;
            });
            setChats(updatedChats);
            setInputValue('');
        }
    };

    const handleClearChat = () => {
        if (activeChat !== null) {
            const updatedChats = chats.map(chat => {
                if (chat.id === activeChat) {
                    return { ...chat, messages: [] };
                }
                return chat;
            });
            setChats(updatedChats);
        }
    };

    const handleDeleteAllChats = () => {
        setChats([]);
    };

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    const handleMenuClick = (action) => {
        if (action === 'clearChat') {
            handleClearChat();
        } else if (action === 'block') {
            setChats(chats.filter(chat => chat.id !== activeChat));
            setActiveChat(null);
        }
    };

    const toggleSearchVisibility = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <div className="whatsapp-container">
            <div className="sidebar">
                <div className={`sidebar-header ${searchVisible ? 'search-active' : ''}`}>
                    <input
                        type="text"
                        placeholder="Ara"
                        className={`search-input ${searchVisible ? 'visible' : ''}`}
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <FaSearch className="sidebar-icon" onClick={toggleSearchVisibility} />
                </div>
                <div className="tabs">
                    <button className={`tab-button ${currentTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>Tümü</button>
                    <button className={`tab-button ${currentTab === 'unread' ? 'active' : ''}`} onClick={() => handleTabChange('unread')}>Okunmamış</button>
                    <button className={`tab-button ${currentTab === 'groups' ? 'active' : ''}`} onClick={() => handleTabChange('groups')}>Gruplar</button>
                </div>
                <div className="chats">
                    {displayedChats.map(chat => (
                        <div key={chat.id} className={`chat ${chat.id === activeChat ? 'active' : ''}`} onClick={() => setActiveChat(chat.id)}>
                            <div className="chat-info">
                                <div className="contact-name">{chat.name}</div>
                                <div className="last-msg">{chat.messages[chat.messages.length - 1]?.text}</div>
                            </div>
                            <div className="last-seen">{chat.lastSeen}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat-window">
                {activeChat !== null && (
                    <>
                        <div className="chat-header">
                            <div className="contact-name">{chats.find(chat => chat.id === activeChat)?.name}</div>
                            <div className="header-icons">
                                <FaCamera className="header-icon" />
                                <FaSearch className="header-icon" />
                                <div className="dropdown">
                                    <FaEllipsisV className="header-icon dropdown-toggle" data-toggle="dropdown" />
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() => handleMenuClick('block')}>
                                            <FaBan /> Kişiyi Engelle
                                        </div>
                                        <div className="dropdown-item" onClick={() => handleMenuClick('clearChat')}>
                                            <FaTrash /> Sohbeti Temizle
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="messages">
                            {chats.find(chat => chat.id === activeChat).messages.map((message, index) => (
                                <div key={index} className={`message ${message.type}`}>
                                    <div className="message-text">{message.text}</div>
                                    <div className="message-info">
                                        <div className="message-time">{message.time}</div>
                                        {message.type === 'sent' && <FaCheckDouble className="status-icon" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <FaPaperclip className="input-icon" />
                            <input
                                type="text"
                                placeholder="Bir mesaj yazın"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <FaSmile className="input-icon" />
                            <FaMicrophone className="input-icon" />
                            <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Compose;
