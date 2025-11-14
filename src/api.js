// Frontend-only API wrapper. Use VITE_BACKEND_URL for the base URL.
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

async function request(path, { method = "GET", params, body, headers } = {}) {
  let url = `${BASE_URL}${path}`;
  if (params && Object.keys(params).length) {
    const qs = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") qs.append(k, v);
    });
    const s = qs.toString();
    if (s) url += `?${s}`;
  }

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed (${res.status})`);
  }
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return res.json();
  return res.text();
}

export const api = {
  me: () => request("/auth/me"),
  login: (email, password) => request("/auth/login", { method: "POST", body: { email, password } }),
  register: (data) => request("/auth/register", { method: "POST", body: data }),
  logout: () => request("/auth/logout", { method: "POST" }),

  getPlaces: (filters) => request("/places", { params: filters }),
  getPlace: (slug) => request(`/places/${slug}`),

  getTours: (filters) => request("/tours", { params: filters }),
  getTour: (slug) => request(`/tours/${slug}`),

  getCars: (filters) => request("/cars", { params: filters }),
  getCar: (id) => request(`/cars/${id}`),

  createBooking: (payload) => request("/bookings", { method: "POST", body: payload }),
  getMyBookings: () => request("/bookings/mine"),
  getBooking: (id) => request(`/bookings/${id}`),

  getWeather: (placeId) => request(`/weather/${placeId}`),
};

export function formatINR(value) {
  if (value == null || isNaN(value)) return "₹0";
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}
