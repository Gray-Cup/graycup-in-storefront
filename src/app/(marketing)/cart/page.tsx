"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/components/cart-provider";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/currency";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products";

// ── Inline auth panel ──────────────────────────────────────────────────────

type AuthMode = "login" | "register";

function AuthPanel() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("register");
  const [loading, setLoading] = useState(false);

  const [login, setLogin] = useState({ email: "", password: "" });
  const [reg, setReg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  function setL(k: keyof typeof login) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setLogin((p) => ({ ...p, [k]: e.target.value }));
  }
  function setR(k: keyof typeof reg) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setReg((p) => ({ ...p, [k]: e.target.value }));
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await authClient.signIn.email({
        email: login.email,
        password: login.password,
      });
      if (error) {
        toast.error(error.message ?? "Invalid email or password");
        return;
      }
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (reg.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    const phoneDigits = reg.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }
    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        email: reg.email,
        password: reg.password,
        name: [reg.firstName, reg.lastName].filter(Boolean).join(" "),
        // @ts-expect-error – additional fields passed through better-auth
        firstName: reg.firstName,
        lastName: reg.lastName || undefined,
        phone: phoneDigits.slice(-10),
      });
      if (error) {
        toast.error(error.message ?? "Registration failed");
        return;
      }
      toast.success("Account created!");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
      <p className="text-sm font-medium text-gray-800 mb-4">
        Sign in to checkout
      </p>

      {/* Mode toggle */}
      <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1 mb-4">
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
            mode === "register"
              ? "bg-black text-white"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Create Account
        </button>
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
            mode === "login"
              ? "bg-black text-white"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Sign In
        </button>
      </div>

      {mode === "login" ? (
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="cart-email" className="text-xs">Email</Label>
            <Input
              id="cart-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={login.email}
              onChange={setL("email")}
              required
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cart-password" className="text-xs">Password</Label>
            <Input
              id="cart-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={login.password}
              onChange={setL("password")}
              required
              className="h-8 text-sm"
            />
          </div>
          <Button type="submit" className="w-full h-8 text-sm" disabled={loading}>
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Sign In"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="cart-firstName" className="text-xs">First Name</Label>
              <Input
                id="cart-firstName"
                placeholder="Arjun"
                value={reg.firstName}
                onChange={setR("firstName")}
                required
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="cart-lastName" className="text-xs">Last Name</Label>
              <Input
                id="cart-lastName"
                placeholder="Sharma"
                value={reg.lastName}
                onChange={setR("lastName")}
                className="h-8 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="cart-reg-email" className="text-xs">Email</Label>
            <Input
              id="cart-reg-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={reg.email}
              onChange={setR("email")}
              required
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cart-phone" className="text-xs">Phone</Label>
            <Input
              id="cart-phone"
              type="tel"
              inputMode="numeric"
              placeholder="9876543210"
              value={reg.phone}
              onChange={setR("phone")}
              required
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cart-reg-password" className="text-xs">Password</Label>
            <Input
              id="cart-reg-password"
              type="password"
              autoComplete="new-password"
              placeholder="Min. 8 characters"
              value={reg.password}
              onChange={setR("password")}
              required
              className="h-8 text-sm"
            />
          </div>
          <Button type="submit" className="w-full h-8 text-sm" disabled={loading}>
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Create Account"}
          </Button>
        </form>
      )}
    </div>
  );
}

// ── Cart page ──────────────────────────────────────────────────────────────

export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity } = useCart();
  const { data: session, isPending } = authClient.useSession();

  const cartSlugs = new Set(items.map((i) => i.product.slug));
  const recommendations = products
    .filter((p) => !cartSlugs.has(p.slug))
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-6">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-6">Your cart is empty</p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-lg border border-gray-200">
                <div className="relative h-24 w-24 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      {item.selectedVariant && (
                        <p className="text-sm text-gray-500">
                          {item.selectedVariant.name} &mdash; {formatPrice(item.selectedVariant.price)}
                        </p>
                      )}
                      {item.selectedPackaging && (
                        <p className="text-sm text-gray-500">
                          Packaging: {item.selectedPackaging}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(index)}
                      className="h-8 w-8 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-base font-semibold">
                      {formatPrice((item.selectedVariant?.price ?? item.product.priceRange.min) * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-4 space-y-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium">{items.length}</span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-lg font-semibold">
                <p>Total</p>
                <p>{formatPrice(total)}</p>
              </div>

              {isPending ? (
                <div className="flex justify-center py-2">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                </div>
              ) : session ? (
                <>
                  <Button className="w-full" size="lg" asChild>
                    <a href="/checkout">Proceed to Checkout</a>
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Secured checkout · Powered by Cashfree
                  </p>
                </>
              ) : (
                <AuthPanel />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-16 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-6 pt-4">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
