class NotificationsService {
    openNotification = (message: string, description: string, type?: 'error' | 'success') =>
        alert(`${type}\n${message}\n${description}`);
}

export default new NotificationsService();
