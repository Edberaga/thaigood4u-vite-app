import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ShareIcon from '@mui/icons-material/Share';

import ChecklistIcon from '@mui/icons-material/Checklist';
import CoPresentIcon from '@mui/icons-material/CoPresent';

export const accountSettingData = [
    {
        name: "Edit Profile",
        icon: <BorderColorRoundedIcon />,
        path: '/',
    },
    {
        name: "Reset Password",
        icon: <LockResetRoundedIcon />,
        path: '/',
    },
    {
        name: "Customer Support",
        icon: <SupportAgentIcon />,
        path: '/',
    },
];

export const memberSettingData = [
    {
        name: "Invite Friends",
        icon: <GroupAddIcon />,
        path: './invite-friends',
    },
    {
        name: "My Affliates",
        icon: <ShareIcon />,
        path: './affliate',
    },
]

export const adminSettingData = [
    {
        name: "Approve Travels",
        icon: <ChecklistIcon />,
        path: '/',
    },
    {
        name: "Check Affliate Request",
        icon: <CoPresentIcon />,
        path: '/',
    },
]