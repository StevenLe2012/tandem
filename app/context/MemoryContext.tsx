import React, { createContext, useContext, useState } from 'react';

interface Memory {
    id: string;
    image: string;
    activity: string;
    date: string;
    user: string;
}

interface MemoryContextType {
    memories: Memory[];
    addMemory: (memory: Omit<Memory, 'id' | 'date'>) => void;
}

const initialMemories: Memory[] = [
    {
        id: '1',
        user: 'Raghad',
        date: '05/29/2025',
        activity: 'Hiked the Dish!',
        image: 'https://dish.stanford.edu/sites/g/files/sbiybj16266/files/styles/breakpoint_2xl_2x/public/media/image/banner-120521-7816-flip_0.jpg?itok=nkHB9uAf',
    },
    {
        id: '2',
        user: 'Jose',
        date: '05/28/2025',
        activity: 'Stargazing with New Moon!',
        image: 'https://media.istockphoto.com/id/1484278497/photo/landscape-with-milky-way-and-silhouette-of-a-hiker-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=LiHac9fL43plyz0gYEN3ZC6Y6M8QAPpcZgEi-cshyxs=',
    },
];

const MemoryContext = createContext<MemoryContextType | undefined>(undefined);

export function MemoryProvider({ children }: { children: React.ReactNode }) {
    const [memories, setMemories] = useState<Memory[]>(initialMemories);

    const addMemory = (memory: Omit<Memory, 'id' | 'date'>) => {
        const newMemory: Memory = {
            ...memory,
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toLocaleDateString(),
        };
        setMemories(prev => [newMemory, ...prev]);
    };

    return (
        <MemoryContext.Provider value={{ memories, addMemory }}>
            {children}
        </MemoryContext.Provider>
    );
}

export function useMemories() {
    const context = useContext(MemoryContext);
    if (context === undefined) {
        throw new Error('useMemories must be used within a MemoryProvider');
    }
    return context;
}
