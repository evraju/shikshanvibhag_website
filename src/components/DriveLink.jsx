import React from 'react';

const DriveLinks = () => {
    const links = [
        { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' }, { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' }, { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' }, { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' }, { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' }, { name: 'Block', link: 'https://docs.google.com/spreadsheets/d/1fc086Tx4UWPXZ-Dz7iaVsUAYUzs8jDGT/edit?usp=sharing&ouid=111342935448049166553&rtpof=true&sd=true' },
        { name: 'Jawale', link: 'https://drive.google.com/file/d/1S2BBqtdV9YDnxqm6HTkPzVyTPhk128Yf/view?usp=sharing' },
        { name: 'Document 3', link: 'https://drive.google.com/your-link-3' },
        { name: 'Document 4', link: 'https://drive.google.com/your-link-4' },
        { name: 'Document 5', link: 'https://drive.google.com/your-link-5' },
        { name: 'Document 6', link: 'https://drive.google.com/your-link-6' },
        { name: 'Document 7', link: 'https://drive.google.com/your-link-7' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">📄 2023 -2024</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
                {links.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriveLinks;
