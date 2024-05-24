export function generateUniqueId() {
    return 'fd-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}