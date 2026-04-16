-- =============================================================================
-- GrayCup Storefront — Postgres Schema
-- Run this against your Neon DB (DATABASE_URL) to provision all tables.
--
-- Tables managed by better-auth:
--   user, session, account, verification
--
-- Custom storefront tables:
--   address, order
-- =============================================================================

-- ─── better-auth: users ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "user" (
  id              TEXT        PRIMARY KEY,
  name            TEXT        NOT NULL,
  email           TEXT        NOT NULL UNIQUE,
  email_verified  BOOLEAN     NOT NULL DEFAULT FALSE,
  image           TEXT,
  created_at      TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL,
  -- Extended buyer profile
  first_name      TEXT        NOT NULL DEFAULT '',
  last_name       TEXT,
  phone           TEXT        NOT NULL DEFAULT ''
);

-- ─── better-auth: sessions ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "session" (
  id           TEXT        PRIMARY KEY,
  expires_at   TIMESTAMPTZ NOT NULL,
  token        TEXT        NOT NULL UNIQUE,
  created_at   TIMESTAMPTZ NOT NULL,
  updated_at   TIMESTAMPTZ NOT NULL,
  ip_address   TEXT,
  user_agent   TEXT,
  user_id      TEXT        NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
);

-- ─── better-auth: OAuth accounts ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "account" (
  id                        TEXT        PRIMARY KEY,
  account_id                TEXT        NOT NULL,
  provider_id               TEXT        NOT NULL,
  user_id                   TEXT        NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  access_token              TEXT,
  refresh_token             TEXT,
  id_token                  TEXT,
  access_token_expires_at   TIMESTAMPTZ,
  refresh_token_expires_at  TIMESTAMPTZ,
  scope                     TEXT,
  password                  TEXT,
  created_at                TIMESTAMPTZ NOT NULL,
  updated_at                TIMESTAMPTZ NOT NULL
);

-- ─── better-auth: email/OTP verifications ────────────────────────────────
CREATE TABLE IF NOT EXISTS "verification" (
  id          TEXT        PRIMARY KEY,
  identifier  TEXT        NOT NULL,
  value       TEXT        NOT NULL,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ,
  updated_at  TIMESTAMPTZ
);

-- ─── Buyer addresses ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "address" (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        TEXT        NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  address_line1  TEXT        NOT NULL,
  address_line2  TEXT,
  city           TEXT        NOT NULL,
  state          TEXT        NOT NULL,
  pincode        TEXT        NOT NULL,
  is_default     BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Orders ───────────────────────────────────────────────────────────────
--
-- items             JSONB snapshot of CartItem[] at time of purchase
-- address_snapshot  JSONB snapshot of the address at time of purchase
-- payment_status    pending | paid | failed | refunded
-- is_fulfilled      Admin toggles this TRUE once order is shipped
-- delhivery_tracking_id  Required when marking is_fulfilled = TRUE
--
CREATE TABLE IF NOT EXISTS "order" (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 TEXT        NOT NULL REFERENCES "user"(id) ON DELETE RESTRICT,
  address_snapshot        JSONB       NOT NULL,
  items                   JSONB       NOT NULL,
  subtotal                NUMERIC(10,2) NOT NULL,
  delivery_charge         NUMERIC(10,2) NOT NULL DEFAULT 0,
  total_amount            NUMERIC(10,2) NOT NULL,
  payment_status          TEXT        NOT NULL DEFAULT 'pending',
  cashfree_order_id       TEXT        UNIQUE,
  cashfree_payment_id     TEXT,
  -- GST details (optional – for B2B buyers) ───────────────────────────────
  gst_number              TEXT,
  -- Customer contact snapshot (denormalised for easy admin access) ──────────
  customer_name           TEXT        NOT NULL DEFAULT '',
  customer_email          TEXT        NOT NULL DEFAULT '',
  customer_phone          TEXT        NOT NULL DEFAULT '',
  -- Fulfilled by admin ──────────────────────────────────────────────────────
  delhivery_tracking_id   TEXT,           -- set by admin on fulfillment
  is_fulfilled            BOOLEAN     NOT NULL DEFAULT FALSE,
  -- ─────────────────────────────────────────────────────────────────────────
  notes                   TEXT,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Useful indexes for admin queries
CREATE INDEX IF NOT EXISTS idx_order_user_id        ON "order"(user_id);
CREATE INDEX IF NOT EXISTS idx_order_payment_status ON "order"(payment_status);
CREATE INDEX IF NOT EXISTS idx_order_is_fulfilled   ON "order"(is_fulfilled);
CREATE INDEX IF NOT EXISTS idx_order_created_at     ON "order"(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_address_user_id      ON "address"(user_id);

-- Trigger to keep updated_at current on order rows
CREATE OR REPLACE FUNCTION update_order_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_order_updated_at ON "order";
CREATE TRIGGER trg_order_updated_at
  BEFORE UPDATE ON "order"
  FOR EACH ROW EXECUTE FUNCTION update_order_updated_at();

-- ─── Migration: customer contact columns (safe to re-run on existing DBs) ──
ALTER TABLE "order" ADD COLUMN IF NOT EXISTS customer_name  TEXT NOT NULL DEFAULT '';
ALTER TABLE "order" ADD COLUMN IF NOT EXISTS customer_email TEXT NOT NULL DEFAULT '';
ALTER TABLE "order" ADD COLUMN IF NOT EXISTS customer_phone TEXT NOT NULL DEFAULT '';
ALTER TABLE "order" ADD COLUMN IF NOT EXISTS gst_number     TEXT;
