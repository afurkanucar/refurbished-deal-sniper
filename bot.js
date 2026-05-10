 const axios = require('axios');
const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// Takip edilen cihazlar ve hedef fiyatlar (Örnek konfigürasyon)
const TARGET_DEVICES = [
    { name: 'Samsung Z Flip 5 (Renewed)', currentPrice: null, targetPrice: 28000, url: 'https://example.com/zflip5' }
];

/**
 * Fiyat düşüşlerini kontrol edip Telegram'a bildirim gönderen ana servis.
 * Asenkron yapı kullanılarak API çağrıları optimize edilmiştir.
 */
async function checkPricesAndNotify() {
    for (let device of TARGET_DEVICES) {
        try {
            // Not: Gerçek senaryoda burada web scraping veya API çağrısı yapılır
            const livePrice = await fetchMockPrice(device.url); 
            
            if (livePrice <= device.targetPrice && livePrice !== device.currentPrice) {
                const message = `🚨 PRICE DROP ALERT!\n\n📱 ${device.name}\n💰 New Price: ${livePrice} TL\n🔗 Link: ${device.url}`;
                
                // Telegram API'sine asenkron POST isteği
                await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: message
                });
                
                device.currentPrice = livePrice; // Durumu güncelle
                console.log(`[Notification Sent] ${device.name}`);
            }
        } catch (error) {
            console.error(`[Network Error] Failed to process ${device.name}:`, error.message);
        }
    }
}

// Simülasyon fonksiyonu
async function fetchMockPrice(url) { return 27500; }

module.exports = { checkPricesAndNotify };
