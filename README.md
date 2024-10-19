## System Information REST API

This package creates a simple HTTP server which returns system information using the [`systeminformation`](https://www.npmjs.com/package/systeminformation) library. This is useful for generating alert or monitoring the system using tools like Uptime Kuma. 

### Usage

#### API Endpoints

- `GET /<system_info_type>`: Fetch system information based on the type. Replace `<system_info_type>` with a valid method from the [`systeminformation`](https://www.npmjs.com/package/systeminformation) library.

Example:

```bash
curl http://localhost:8098/cpu
```
> It will return CPU information shown below:

```json
{
  "manufacturer": "Apple",
  "brand": "M1 Pro",
  "vendor": "Apple",
  "family": "458787763",
  "model": "",
  "stepping": "4",
  "revision": "",
  "voltage": "",
  "speed": 2.4,
  "speedMin": 2.4,
  "speedMax": 2.4,
  "governor": "",
  "cores": 8,
  "physicalCores": 8,
  "performanceCores": 6,
  "efficiencyCores": 2,
  "processors": 1,
  "socket": "SOC",
  "flags": "",
  "virtualization": true,
  "cache": {
    "l1d": 131072,
    "l1i": 65536,
    "l2": 4194304,
    "l3": null
  }
}
```

```bash
curl http://localhost:8098/mem
```
> It will return memory information shown below:

```json
{
  "total": 17179869184,
  "free": 291323904,
  "used": 16888545280,
  "active": 5663948800,
  "available": 11515920384,
  "buffers": 0,
  "cached": 0,
  "slab": 0,
  "buffcache": 11224596480,
  "swaptotal": 2147483648,
  "swapused": 547618816,
  "swapfree": 1599864832,
  "writeback": null,
  "dirty": null
}
```

### Prerequisites

- Node.js
- Install dependencies (npm install systeminformation)

### Environment Variables

- `SI_PORT`: Set the port for the server (default: `8098`)

### Running the Server

To run the server:

```bash
node server.js
```

### License

This project is licensed under the MIT License.