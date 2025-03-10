import { TeachingRole } from "$lib/cv/types";

export const teaching_roles: TeachingRole[] = [
    {
        date: '2024 Spring', 
        title: 'Applied Cryptography', 
        topics: 'homomorphic properties of various asymmetric schemes, oblivious transfer, garbled circuits, threshold encryption, blind signatures, elementary zero-knowledge proofs, digital signatures, block ciphers, Diffie-Hellman ratchet, modes of symmetric encryption, message integrity, asymmetric encryption, and key derivation.', 
        contributions: [
            'Held weekly office hours for students to ask questions about course topics.', 
        ] 
    },
    { 
        date: '2023 Spring', 
        title: 'The Basics of Cryptographic Systems', 
        topics: 'theoretical foundations of digital signature schemes, public key infrastructure, and differential privacy.', 
        contributions: [
            'Held weekly office hours for students to ask about course topics.', 
        ] 
    },
    { 
        date: '2021 Fall', 
        title: 'Deep Learning', 
        topics: 'convolutional NNs, recurrent NNs (LSTM, GRU), autoencoders, transformers, graph NNs, and generative adversarial NNs, mathematical foundations of deep learning, PyTorch, and TensorFlow',
        contributions: [
            'As Head Teaching Assistant, I held weekly office hours and managed 30 TA\'s in order to maintain all course projects and written assignments.',
            'Held weekly office hours for students to ask about course topics.',
        ] 
    },
    { 
        date: '2021 Summer', 
        title: 'Blockchains & Cryptocurrencies', 
        topics: 'consensus mechanisms, fork-choice rules, execution engines (EVM / WASM), state management (account vs UTXO), transaction memory pools, rollups, sharding, front-running and MEV, smart contracts, decentralized finance, and decentralized applications.',
        contributions: [
            'As Head Teaching Assistant, I held weekly office hours, posted supplementary lectures, and managed 6 TA\'s in order to create all course projects and written assignments.',
            'Designed and implemented an extensive peer-to-peer blockchain in GoLang from the ground up. Students added to this codebase in their assignments.',
            'Designed and implemented a more optimized version of state management and consensus in C++ for use in student\'s projects.',
            'Designed a lending platform and a decentralized exchange in Solidity as other projects for students to build off of.',
            'Held weekly office hours for students to ask about any cutting-edge technique in blockchain development.'
        ] 
    },
    { 
        date: '2021 Spring', 
        title: 'Modern Web and Mobile Applications', 
        topics: 'HTML, CSS, Javascript, Typescript, React, React Native, Vue, NextJS, Tailwind, Bootstrap, NodeJS, Express,Firebase, MongoDB, Django, Flask, front-end state management, object relational mapping, and authentication.',
        contributions: [
            'Held weekly office hours for students to ask about course topics.',
        ] 
    }
];