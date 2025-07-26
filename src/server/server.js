import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  dept: String,
  session: String,
  feedback: Object,
  timestamp: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/api/feedback', async (req, res) => {
  try {
    const entry = new Feedback(req.body);
    await entry.save();
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Failed to save feedback' });
  }
});

app.get('/api/feedback', async (req, res) => {
  try {
    const all = await Feedback.find().sort({ timestamp: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ status: 'error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
