export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Все запросы перенаправляем на работающий IP Roblox
    url.hostname = '128.116.31.3';
    url.port = '443';
    
    const newRequest = new Request(url, request);
    
    try {
      const response = await fetch(newRequest);
      return response;
    } catch (error) {
      return new Response('Worker Error: ' + error.message, { status: 502 });
    }
  }
};
