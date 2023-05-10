import API from "./api.js";

const wifis = await API.read("/wifis");

function loadwifisView(wifis) {
  for (const wifi of wifis) {
    createWifiView(wifi);
  }
}

function createWifiView(wifi) {
  const tbody = document.querySelector("tbody");

  const rowView = `<tr ssid="wifi-${wifi.ssid}">
      <td>${wifi.ssid}</td>
      <td>${wifi.rssi}</td>
      <td>${wifi.channel}</td>
      <td>${wifi.band}</td>
      <td>${wifi.maxrate}</td>
      <td>${wifi.width}</td>
    </tr>`;

  tbody.insertAdjacentHTML("beforeend", rowView);

  const rowTag = document.querySelector(`tr#wifi-${wifi.ssid}`);
}

loadwifisView(wifis);