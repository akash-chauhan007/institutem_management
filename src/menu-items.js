export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'View',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Student & Teacher',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Add Student',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Student List',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                },
                {
                    id: 'form-basic',
                    title: 'Add Teacher',
                    type: 'item',
                    url: '/forms/form-basic1',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Teacher List',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap1'
                }
            ]
        }
         
        
    ]
}